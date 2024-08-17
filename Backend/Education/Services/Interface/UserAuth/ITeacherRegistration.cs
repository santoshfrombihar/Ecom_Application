using Education.Models;

namespace Education.Services.Interface.UserAuth
{
    public interface ITeacherRegistration
    {
        public string AddTeacher(TeacherRegistrationModel model);
    }
}
