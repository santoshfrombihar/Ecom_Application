using Education.ConfigClass;
using Education.Models;
using Education.Services.Interface.UserAuth;
using Microsoft.AspNetCore.Mvc;


namespace Education.Controllers.UserAuthControllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UserAuthController : ControllerBase
    {
        private readonly JwtTokenGenerator _jwtTokenGenerator;
        private readonly ITeacherRegistration _teacherRegistration;

        public UserAuthController(JwtTokenGenerator jwtTokenGenerator, ITeacherRegistration teacherRegistration)
        {
            _jwtTokenGenerator = jwtTokenGenerator;
            _teacherRegistration = teacherRegistration;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginModel loginModel)
        {
            if(loginModel.Email == "test"  && loginModel.Password == "test")
            {
                var token = _jwtTokenGenerator.GenerateToken(loginModel.Email);
                return Ok(new { Token = token });
            }

            return Unauthorized();
        }

        [HttpPost("teacherRegistration")]
        public IActionResult TeacherRegistration([FromBody]  TeacherRegistrationModel teacherRegistrationmodel)
        {
            if(teacherRegistrationmodel != null)
            {
                var status = _teacherRegistration.AddTeacher(teacherRegistrationmodel);
                return Ok(status);
            }
            return BadRequest();
        }

    }
}
