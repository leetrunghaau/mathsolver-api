// categoryDTO.js

class CategoryDTO {
    constructor(categoryId, name, parent, enable, image, createdAt, modifiedAt) {

      this.categoryId = categoryId,
      this.name = name,
      this.parent = parent,
      this.enable = enable,
      this.image = image,
      this.createdAt = createdAt,
      this.modifiedAt = modifiedAt
    }
  
    
  };
  
  module.exports = CategoryDTO;
  