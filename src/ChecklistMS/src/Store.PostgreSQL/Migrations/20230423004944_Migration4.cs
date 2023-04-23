using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Store.PostgreSQL.Migrations
{
    /// <inheritdoc />
    public partial class Migration4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
            name: "Checklist");
            migrationBuilder.DropTable(
            name: "TaskCheckbox");

            migrationBuilder.CreateTable(
               name: "Checklist",
               columns: table => new
               {
                   Id = table.Column<int>(type: "integer", nullable: false)
                       .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                   Title = table.Column<string>(type: "text", nullable: false),
                   CreatedOn = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                   UpdatedOn = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                   DeletedOn = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
               },
               constraints: table =>
               {
                   table.PrimaryKey("PK_Checklist", x => x.Id);
               });

            migrationBuilder.CreateTable(
                name: "TaskCheckbox",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    IdChecklist = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    IsCompleted = table.Column<bool>(type: "boolean", nullable: false),
                    CompletionDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    UpdatedOn = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    DeletedOn = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaskCheckbox", x => x.Id);
                });
        
    }



        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
