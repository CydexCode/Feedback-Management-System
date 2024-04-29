using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SecureWebSite.Server.Models;

namespace SecureWebSite.Server.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Student> Student { get; set; }

        public DbSet<StudentToLecture> StudentToLecture { get; set; }
        public DbSet<StudentToCourse> StudentToCourse { get; set; }
        public DbSet<User> User { get; set; }
    }
}
