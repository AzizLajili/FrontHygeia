import { Component, AfterViewInit } from '@angular/core';
import { Medicament } from '../../medicament';
import { MedicamentService } from '../../medicament.service';
import { HygeiaService } from 'src/app/hygeia.service';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-medicament-list',
  templateUrl: './medicament-list.component.html',
  styleUrls: ['./medicament-list.component.css']
})
export class MedicamentListComponent implements AfterViewInit {
  medicaments: Medicament[] = [];
  filteredMedicaments: Medicament[] = [];
  searchType: string = '';
p: number =1;

  constructor(private medicamentService: MedicamentService, private hygeiaServ: HygeiaService, private router: Router) {}

  ngAfterViewInit() {
    this.getMedicaments();
  }

  createChart() {
    // Fetch the data for your medications
    const medicaments = this.medicaments; // Replace with your actual data
  
    // Extract the labels (medication names) and quantities
    const labels = medicaments.map((medicament) => medicament.nom);
    const quantities = medicaments.map((medicament) => medicament.quantite);
  
    // Define an array of colors
    const colors = ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)', 'rgba(75, 192, 192, 0.8)', 'rgba(153, 102, 255, 0.8)', 'rgba(255, 159, 64, 0.8)'];
  
    // Create an array of background colors and border colors
    const backgroundColors = quantities.map((quantity, index) => colors[index % colors.length]);
    const borderColors = quantities.map((quantity, index) => colors[index % colors.length]);
  
    // Create a new chart instance
    const chart = new Chart('medicamentChart', {
      type: 'bar', // Choose the chart type (e.g., bar, line, pie, etc.)
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Quantity', // Label for the dataset
            data: quantities,
            backgroundColor: backgroundColors, // Assign the background colors
            borderColor: borderColors, // Assign the border colors
            borderWidth: 1, // Set the border width
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true, // Start the y-axis from zero
            ticks: {
              precision: 0, // Set the precision of the tick values
            },
          },
        },
      },
    });

    console.log(labels);
    console.log(quantities);
  }

  getMedicaments() {
    this.medicamentService.getMedicamentsList().subscribe((data) => {
      this.medicaments = data;
      console.log(data);
      this.createChart();
      this.filteredMedicaments = data;
    });
  }
  searchMedicaments() {
    if (this.searchType.trim() !== '') {
      this.filteredMedicaments = this.medicaments.filter((medicament) =>
        medicament.type.toLowerCase().includes(this.searchType.toLowerCase())
      );
    } else {
      this.filteredMedicaments = this.medicaments;
    }
  }

  navigateToMedicamentDetail(nom: string) {
    this.router.navigate(['/medicament', nom]);
  }
}
