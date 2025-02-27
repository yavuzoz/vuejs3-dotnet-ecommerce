using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext(DbContextOptions options) : DbContext(options)
    {


        public DbSet<Product> Products => Set<Product>();


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>().HasData(
                new List<Product>
                {
                new Product { Id = 1, Name = "Product 1", Description = "Description 1", Price = 100.00m, IsActive = true, PictureUrl = "url1.jpg", Stock = 10 },
                new Product { Id = 2, Name = "Product 2", Description = "Description 2", Price = 200.00m, IsActive = true, PictureUrl = "url2.jpg", Stock = 20 },
                new Product { Id = 3, Name = "Product 3", Description = "Description 3", Price = 300.00m, IsActive = true, PictureUrl = "url3.jpg", Stock = 30 },
                new Product { Id = 4, Name = "Product 4", Description = "Description 4", Price = 400.00m, IsActive = false, PictureUrl = "url4.jpg", Stock = 40 },
                new Product { Id = 5, Name = "Product 5", Description = "Description 5", Price = 500.00m, IsActive = true, PictureUrl = "url5.jpg", Stock = 50 }
                }
            );

        }
    }
}