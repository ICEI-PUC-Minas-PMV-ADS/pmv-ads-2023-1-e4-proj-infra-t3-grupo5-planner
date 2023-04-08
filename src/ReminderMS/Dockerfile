FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["src/ReminderMS.API/ReminderMS.API.csproj", "ReminderMS.API/"]
COPY ["src/Networking.API/Networking.API.csproj", "Networking.API/"]
COPY ["src/Core/Core.csproj", "Core/"]
COPY ["src/Store.PostgreSQL/Store.PostgreSQL.csproj", "Store.PostgreSQL/"]
RUN dotnet restore "UserMS.API/UserMS.API.csproj"
COPY . .
WORKDIR "/src/src/ReminderMS.API"
RUN dotnet build "ReminderMS.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ReminderMS.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ReminderMS.API.dll"]
