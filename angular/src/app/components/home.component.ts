import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 class="text-4xl font-bold text-gray-900">Angular Boilerplate</h1>
      <p class="text-gray-500 text-sm">Standalone components + signals</p>
      <div class="flex gap-2">
        <input
          [(ngModel)]="name"
          placeholder="Enter a name..."
          class="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          (click)="greet()"
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
        >
          Greet
        </button>
      </div>
      @if (greeting()) {
        <p class="text-green-600 font-medium">{{ greeting() }}</p>
      }
      <p class="text-sm text-gray-400">Count: {{ count() }}</p>
      <button (click)="count.set(count() + 1)" class="text-sm text-blue-500 hover:underline">
        Increment
      </button>
    </main>
  `,
})
export class HomeComponent {
  name = "";
  greeting = signal("");
  count = signal(0);

  greet(): void {
    this.greeting.set(`Hello, ${this.name || "World"}!`);
  }
}
