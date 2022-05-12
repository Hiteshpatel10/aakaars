import { Button } from "bootstrap";
import React from "react";
import "./ItemCard.css";

export default function TempleCard() {
  return (
    <div className="w-100 pt-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="https://images.unsplash.com/photo-1631116617822-e100bd7e6e06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="ak"
              className="w-100 p-1"
            />
          </div>
          <div className="temple-mid col text-center mt-auto mb-auto">
            <h1 className="temple-title">Home Temple</h1>
            <h6 className="temple-sub-title">500+ Options | From Rs.700</h6>
            <a href="something" class="button3">
              Button
            </a>
          </div>
          <div className="col">
            <img
              src="https://images.unsplash.com/photo-1631116617822-e100bd7e6e06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="ak"
              className="w-100 p-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
