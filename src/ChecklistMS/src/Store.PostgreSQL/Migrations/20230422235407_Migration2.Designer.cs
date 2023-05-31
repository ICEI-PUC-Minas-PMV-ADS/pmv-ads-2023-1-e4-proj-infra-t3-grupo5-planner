﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using Store.PostgreSQL.Database;

#nullable disable

namespace Store.PostgreSQL.Migrations
{
    [DbContext(typeof(Context))]
<<<<<<< HEAD:src/ChecklistMS/src/Store.PostgreSQL/Migrations/20230422235407_Migration2.Designer.cs
    [Migration("20230422235407_Migration2")]
    partial class Migration2
=======
    [Migration("20230418234515_InitialMigration")]
    partial class InitialMigration
>>>>>>> fe76b3b05c9eee7f385bfdd55136067771180f3f:src/PageMS/src/Store.PostgreSQL/Migrations/20230418234515_InitialMigration.Designer.cs
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.0-preview.2.23128.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

<<<<<<< HEAD:src/ChecklistMS/src/Store.PostgreSQL/Migrations/20230422235407_Migration2.Designer.cs
            modelBuilder.Entity("Core.Entities.Checklist", b =>
=======
            modelBuilder.Entity("Core.Entities.Page", b =>
>>>>>>> fe76b3b05c9eee7f385bfdd55136067771180f3f:src/PageMS/src/Store.PostgreSQL/Migrations/20230418234515_InitialMigration.Designer.cs
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

<<<<<<< HEAD:src/ChecklistMS/src/Store.PostgreSQL/Migrations/20230422235407_Migration2.Designer.cs
=======
                    b.Property<string>("Body")
                        .IsRequired()
                        .HasColumnType("text");

>>>>>>> fe76b3b05c9eee7f385bfdd55136067771180f3f:src/PageMS/src/Store.PostgreSQL/Migrations/20230418234515_InitialMigration.Designer.cs
                    b.Property<DateTime>("CreatedOn")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime?>("DeletedOn")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("UpdatedOn")
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("timestamp with time zone");
<<<<<<< HEAD:src/ChecklistMS/src/Store.PostgreSQL/Migrations/20230422235407_Migration2.Designer.cs

                    b.HasKey("Id");

                    b.ToTable("Checklist");
                });

            modelBuilder.Entity("Core.Entities.TaskCheckbox", b =>
=======

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("Pages");
                });

            modelBuilder.Entity("Core.Entities.Widget", b =>
>>>>>>> fe76b3b05c9eee7f385bfdd55136067771180f3f:src/PageMS/src/Store.PostgreSQL/Migrations/20230418234515_InitialMigration.Designer.cs
                {
                    b.Property<int?>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int?>("Id"));

<<<<<<< HEAD:src/ChecklistMS/src/Store.PostgreSQL/Migrations/20230422235407_Migration2.Designer.cs
                    b.Property<DateTime>("CompletionDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime>("CreatedOn")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime?>("DeletedOn")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("IdChecklist")
                        .HasColumnType("integer");

                    b.Property<bool>("IsCompleted")
                        .HasColumnType("boolean");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");
=======
                    b.Property<int?>("PageId")
                        .HasColumnType("integer");

                    b.Property<int>("Type")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("PageId");
>>>>>>> fe76b3b05c9eee7f385bfdd55136067771180f3f:src/PageMS/src/Store.PostgreSQL/Migrations/20230418234515_InitialMigration.Designer.cs

                    b.ToTable("Widget");
                });

            modelBuilder.Entity("Core.Entities.Widget", b =>
                {
                    b.HasOne("Core.Entities.Page", null)
                        .WithMany("Widgets")
                        .HasForeignKey("PageId");
                });

<<<<<<< HEAD:src/ChecklistMS/src/Store.PostgreSQL/Migrations/20230422235407_Migration2.Designer.cs
                    b.ToTable("TaskCheckbox");
=======
            modelBuilder.Entity("Core.Entities.Page", b =>
                {
                    b.Navigation("Widgets");
>>>>>>> fe76b3b05c9eee7f385bfdd55136067771180f3f:src/PageMS/src/Store.PostgreSQL/Migrations/20230418234515_InitialMigration.Designer.cs
                });
#pragma warning restore 612, 618
        }
    }
}