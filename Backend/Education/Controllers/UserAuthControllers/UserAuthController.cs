using Education.ConfigClass;
using Education.Models;
using Microsoft.AspNetCore.Mvc;


namespace Education.Controllers.UserAuthControllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UserAuthController : ControllerBase
    {
        private readonly JwtTokenGenerator _jwtTokenGenerator;

        public UserAuthController(JwtTokenGenerator jwtTokenGenerator)
        {
            _jwtTokenGenerator = jwtTokenGenerator;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginModel loginModel)
        {
            if(loginModel.UserName == "test"  && loginModel.Password == "test")
            {
                var token = _jwtTokenGenerator.GenerateToken(loginModel.UserName);
                return Ok(new { Token = token });
            }

            return Unauthorized();
        }

    }
}
