FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

# build server

FROM microsoft/dotnet:2.1-sdk AS server-build
WORKDIR /src/server
COPY src/server/NhdcOnline.csproj .
RUN dotnet restore -nowarn:msb3202,nu1503
COPY src/server .
RUN dotnet build -c Release -o /app

FROM server-build AS server-publish
RUN dotnet publish -c Release -o /app

# build client

FROM node:10.6.0 as client-build
WORKDIR /src/client
COPY src/client/ ./
RUN yarn install
RUN yarn build --dest /app

# merge it together

FROM base AS final
WORKDIR /app
# copy in server
COPY --from=server-publish /app .
# copy in client
COPY --from=client-build /app ./wwwroot
ENTRYPOINT ["dotnet", "NhdcOnline.dll"]
