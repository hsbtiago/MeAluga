using System.ComponentModel.DataAnnotations;

namespace API.ViewModels
{
    public class LoginVM
    {
        [Required, MaxLength(20)]
        public string Usuario { get; set; }

        [Required, DataType(DataType.Password), MinLength(6), MaxLength(20)]
        public string Senha { get; set; }

        public bool Lembrar { get; set; }

    }
}