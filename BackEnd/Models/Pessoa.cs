﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MeAluga.Extensions;

namespace MeAluga.Models
{
    public class Pessoa
    {        
        [Key]
        public int Id { get; set; }


        [Required, MaxLength(100)]
        public string Nome { get; set; }

        
        [Required, CPF, MaxLength(11)]
        public string CPF { get; set; }
        
        
        [MaxLength(20)]
        public string RG { get; set; }
        

        //TODO: Completar os dados da pessoa



        [Display(Name = "Data de Registro")]
        public System.DateTime DataRegistro { get; set; } = System.DateTime.Now;


        public Endereco Endereco {get;set;}
        public virtual ICollection<Contrato> Contratos {get;set;} = new List<Contrato>();
        
    }
}