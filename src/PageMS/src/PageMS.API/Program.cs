﻿using Networking.API;
using Store.PostgreSQL.Repositories;
using Core.Stores;
using Microsoft.Extensions.DependencyInjection;

var api = new ApiBootstrap(args, options =>
{
    options.AddScoped<IPageStore, PageRepository>();
});

await api.RunAsync();