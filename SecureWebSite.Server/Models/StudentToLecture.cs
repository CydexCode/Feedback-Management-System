using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SecureWebSite.Server.Models
{
    public class StudentToLecture
    {
        [Key]
        public int id { get; set; }
        public string stname { get; set; }
        public string Lecture
        {
            get; set;
        }
    }
}