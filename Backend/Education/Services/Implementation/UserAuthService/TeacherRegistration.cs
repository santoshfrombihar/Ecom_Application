using Education.DbContextFile;
using Education.Models;
using Education.Services.Interface.UserAuth;

namespace Education.Services.Implementation.UserAuthService
{
    public class TeacherRegistration : ITeacherRegistration
    {
        public readonly EducationRoomDbContext _educationRoomDbContext;

        public TeacherRegistration(EducationRoomDbContext educationRoomDbContext)
        {
            _educationRoomDbContext = educationRoomDbContext;
        }

        public string AddTeacher(TeacherRegistrationModel model)
        {
            try
            {
                _educationRoomDbContext.teacherRegistrationModels.Add(model);
                _educationRoomDbContext.SaveChanges();
            }
            catch (Exception ex) 
            { 
                return ex.Message;
            }

            return "Ok";
        }
    }
}
