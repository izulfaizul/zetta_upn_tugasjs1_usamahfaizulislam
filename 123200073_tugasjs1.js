function purchaseBook(bookTitle, author, price, discountPercentage, taxPercentage) {
    const TAX_RATE = 0.1; // constant tax rate
    
    let discountAmount = price * (discountPercentage / 100); // amount of discount
    let priceAfterDiscount = price - discountAmount; // price after discount
    let taxAmount = priceAfterDiscount * (taxPercentage / 100); // amount of tax
    let priceAfterTax = priceAfterDiscount + taxAmount; // price after tax
    
    console.log("Book title: " + bookTitle);
    console.log("Author: " + author);
    console.log("Price: $" + price.toFixed(2));
    console.log("Discount: " + discountPercentage + "%");
    console.log("Discount amount: $" + discountAmount.toFixed(2));
    console.log("Price after discount: $" + priceAfterDiscount.toFixed(2));
    console.log("Tax: " + taxPercentage + "%");
    console.log("Tax amount: $" + taxAmount.toFixed(2));
    console.log("Price after tax: $" + priceAfterTax.toFixed(2));
  }
  
  // Example usage:
  purchaseBook("The Great Gatsby", "F. Scott Fitzgerald", 12.99, 20, 8);
  