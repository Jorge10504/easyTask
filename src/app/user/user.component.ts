import { Component, computed, signal } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: "app-user",
  standalone: true,
  imports: [],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  imagePath = computed(() => "assets/users/" + this.selectedUser().avatar);

  // get imgPath() {
  //   return "assets/users/" + this.selectedUser.avatar;
  // }

  get userName() {
    return this.selectedUser.name;
  }

  onSelectUser() {
    console.log("Clicked!");
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
