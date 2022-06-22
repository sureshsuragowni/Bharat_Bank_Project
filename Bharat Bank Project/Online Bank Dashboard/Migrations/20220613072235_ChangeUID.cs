using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OnlineBankingDashboard.Migrations
{
    public partial class ChangeUID : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ChangerUserIdPwdContexts",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AccountNumber = table.Column<int>(type: "int", nullable: false),
                    LoginPassword = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConfirmLoginPassword = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TransactionPassword = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConfirmTransactionPassword = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EnterOtp = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChangerUserIdPwdContexts", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ChangerUserIdPwdContexts");
        }
    }
}
