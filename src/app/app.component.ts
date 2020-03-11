import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  submitted = false;
  gender = null;
  weight = null;
  height = null;
  feet = null;
  inches = null;
  age = null;
  activityVariable = null;
  macros = {
    lowCarb: { protein: 0, carbs: 0, fats: 0 },
    highCarb: { protein: 0, carbs: 0, fats: 0 }
  };
  public resetForm() {
    this.submitted = false;
    this.gender = null;
    this.weight = null;
    this.height = null;
    this.feet = null;
    this.inches = null;
    this.age = null;
    this.activityVariable = null;
    this.macros = {
      lowCarb: { protein: 0, carbs: 0, fats: 0 },
      highCarb: { protein: 0, carbs: 0, fats: 0 }
    };
  }
  public calculateMacros(): void {
    this.submitted = true;
    //convert weight from lbs to kg
    this.weight = Math.floor(this.weight * 0.453592);
    this.height = Math.floor((this.feet + this.inches / 12.0) * 30.48);
    console.log(this.weight);
    if (this.gender == null) {
      alert("Gender not Selected!");
    }

    if (this.gender == "male") {
      let bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
      let dcr = bmr * this.activityVariable;
      let lowCarbDeficit = dcr * 0.75;
      let highCarbDeficit = dcr * 0.9;

      this.macros.lowCarb.protein = (lowCarbDeficit * 0.4) / 4;
      this.macros.lowCarb.carbs = (lowCarbDeficit * 0.35) / 4;
      this.macros.lowCarb.fats = (lowCarbDeficit * 0.25) / 9;

      this.macros.highCarb.protein = (highCarbDeficit * 0.3) / 4;
      this.macros.highCarb.carbs = (highCarbDeficit * 0.5) / 4;
      this.macros.highCarb.fats = (highCarbDeficit * 0.2) / 9;
    } else {
      let bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
      let dcr = bmr * this.activityVariable;
      let lowCarbDeficit = dcr * 0.8;
      let highCarbDeficit = dcr * 0.9;

      this.macros.lowCarb.protein = (lowCarbDeficit * 0.35) / 4;
      this.macros.lowCarb.carbs = (lowCarbDeficit * 0.4) / 4;
      this.macros.lowCarb.fats = (lowCarbDeficit * 0.25) / 9;

      this.macros.highCarb.protein = (highCarbDeficit * 0.3) / 4;
      this.macros.highCarb.carbs = (highCarbDeficit * 0.5) / 4;
      this.macros.highCarb.fats = (highCarbDeficit * 0.2) / 9;
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
