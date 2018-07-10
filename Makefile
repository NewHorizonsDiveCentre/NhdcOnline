# builds the docker containers
BASE=docker-compose.yml
STAGING=docker-compose.staging.yml
DEVELOPMENT=docker-compose.development.yml

production:
	docker-compose -f $(BASE) build

staging:
	docker-compose -f $(BASE) -f $(STAGING) build

development:
	docker-compose -f $(BASE) -f $(DEVELOPMENT) build
