FROM mcr.microsoft.com/dotnet/runtime:6.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Application.API/Application.API.csproj", "Application.API/"]
RUN dotnet restore "Application.API/Application.API.csproj"
COPY . .
WORKDIR "/src/Application.API"
RUN dotnet build "Application.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Application.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Application.API.dll"]
