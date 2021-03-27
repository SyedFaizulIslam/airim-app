# https://code.visualstudio.com/docs/containers/quickstart-aspnet-core
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS base
WORKDIR /app
EXPOSE 5000
ENV ASPNETCORE_URLS=http://*:5000

# copy csproj and restore as distinct layers

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["airim-app.csproj", "./"]
RUN dotnet restore "./airim-app.csproj"

# copy everything else and build app
COPY . .
WORKDIR /src/.
RUN dotnet build "airim-app.csproj" -c release -o /app/build

FROM build AS publish
RUN dotnet publish "airim-app.csproj" -c release -o /app/publish

# final stage/image
FROM build AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "airim-app.dll"]