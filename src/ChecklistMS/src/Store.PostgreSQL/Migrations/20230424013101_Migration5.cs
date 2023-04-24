using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Store.PostgreSQL.Migrations
{
    /// <inheritdoc />
    public partial class Migration5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TaskCheckbox_Checklist_ChecklistId",
                table: "TaskCheckbox");

            migrationBuilder.DropIndex(
                name: "IX_TaskCheckbox_ChecklistId",
                table: "TaskCheckbox");

            migrationBuilder.DropColumn(
                name: "ChecklistId",
                table: "TaskCheckbox");

            migrationBuilder.CreateTable(
                name: "ChecklistTaskCheckbox",
                columns: table => new
                {
                    ChecklistId = table.Column<int>(type: "integer", nullable: false),
                    TaskCheckboxId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChecklistTaskCheckbox", x => new { x.ChecklistId, x.TaskCheckboxId });
                    table.ForeignKey(
                        name: "FK_ChecklistTaskCheckbox_Checklist_ChecklistId",
                        column: x => x.ChecklistId,
                        principalTable: "Checklist",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ChecklistTaskCheckbox_TaskCheckbox_TaskCheckboxId",
                        column: x => x.TaskCheckboxId,
                        principalTable: "TaskCheckbox",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ChecklistTaskCheckbox_TaskCheckboxId",
                table: "ChecklistTaskCheckbox",
                column: "TaskCheckboxId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ChecklistTaskCheckbox");

            migrationBuilder.AddColumn<int>(
                name: "ChecklistId",
                table: "TaskCheckbox",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TaskCheckbox_ChecklistId",
                table: "TaskCheckbox",
                column: "ChecklistId");

            migrationBuilder.AddForeignKey(
                name: "FK_TaskCheckbox_Checklist_ChecklistId",
                table: "TaskCheckbox",
                column: "ChecklistId",
                principalTable: "Checklist",
                principalColumn: "Id");
        }
    }
}
