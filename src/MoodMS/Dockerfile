FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["src/MoodMS.API/MoodMS.API.csproj", "MoodMS.API/"]
COPY ["src/Networking.API/Networking.API.csproj", "Networking.API/"]
COPY ["src/Core/Core.csproj", "Core/"]
COPY ["src/Store.PostgreSQL/Store.PostgreSQL.csproj", "Store.PostgreSQL/"]
RUN dotnet restore "MoodMS.API/MoodMS.API.csproj"
COPY . .
WORKDIR "/src/src/MoodMS.API"
RUN dotnet build "MoodMS.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MoodMS.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MoodMS.API.dll"]
