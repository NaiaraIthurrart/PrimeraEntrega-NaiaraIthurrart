class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (this.products.some(p => p.code === code)) {
        console.log(`Error: El producto con código ${code} ya existe`);
        return;
      }
      
      const newProduct = {
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
      this.products.push(newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (product) {
        return product;
      } else {
        console.log("Error: Producto no encontrado");
        return null;
      }
    }
  }
  
  
  const manager = new ProductManager();
  manager.addProduct("La novia gitana", "Libro de Carmen Mola", 10000, "/", "PRO01", 10);

  const products = manager.getProducts();
  console.log(products);