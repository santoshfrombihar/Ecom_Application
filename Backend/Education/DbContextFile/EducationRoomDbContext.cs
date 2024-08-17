using Education.Models;
using Microsoft.EntityFrameworkCore;

namespace Education.DbContextFile
{
    public class EducationRoomDbContext : DbContext
    {
        public EducationRoomDbContext(DbContextOptions<EducationRoomDbContext> options) : base(options) { }

        public DbSet<TeacherRegistrationModel> teacherRegistrationModels { get; set; }
    }
}
