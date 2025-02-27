using System.ComponentModel.DataAnnotations;

namespace API.Entity
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string? Name { get; set; }
        public string? Description { get; set; }
        public decimal Price { get; set; }

        public bool IsActive { get; set; }
        public string? PictureUrl { get; set; }

        public int Stock { get; set; }
    }
}