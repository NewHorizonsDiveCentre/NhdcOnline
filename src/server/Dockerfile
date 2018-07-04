FROM microsoft/aspnetcore:2.1 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.1 AS build
WORKDIR /src
COPY Nhdc.sln ./
COPY src/NhdcOnline/NhdcOnline.csproj src/NhdcOnline/
RUN dotnet restore -nowarn:msb3202,nu1503
COPY . .
WORKDIR /src/src/NhdcOnline
RUN dotnet build -c Release -o /app

FROM build AS publish
RUN dotnet publish -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "NhdcOnline.dll"]
