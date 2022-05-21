import React from "react";
import categoryList from "../assets/images";

export default function UploadPortal() {
  let categoryOption = categoryList.map((item) => (
    <option key={item.alt}>{item.alt}</option>
  ));
  return (
    <div className="container pt-2">
      <form>
        {/* For Name */}
        <div class="form-group row p-1">
          <label for="name" class="col-sm-2 col-form-label col-form-label-lg">
            name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control form-control-lg"
              id="name"
              placeholder="name"
            />
          </div>
        </div>

        {/* For Price */}
        <div class="form-group row p-1">
          <label for="price" class="col-sm-2 col-form-label col-form-label-lg">
            price
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control form-control-lg"
              id="price"
              placeholder="price"
            />
          </div>
        </div>

        {/* For Height */}
        <div class="form-group row p-1">
          <label for="height" class="col-sm-2 col-form-label col-form-label-lg">
            height
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control form-control-lg"
              id="height"
              placeholder="height"
            />
          </div>
        </div>

        {/* For Weight */}
        <div class="form-group row p-1">
          <label for="weight" class="col-sm-2 col-form-label col-form-label-lg">
            weight
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control form-control-lg"
              id="weight"
              placeholder="weight"
            />
          </div>
        </div>

        {/* For Category  */}
        <div class="form-group row p-1">
          <label
            for="category"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            category
          </label>
          <div class="col-sm-10">
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              {categoryList.map((items) => (
                <option>{items.alt}</option>
              ))}
            </select>
          </div>
        </div>
        <div class="form-group row p-1">
          <label
            for="category"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            choose images
          </label>
          <div class="col-sm-10">
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="validatedCustomFile"
                multiple="multiple"
                required
              />
              <label class="custom-file-label" for="validatedCustomFile">
                Choose file...
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
