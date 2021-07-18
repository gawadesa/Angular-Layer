import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  currentTutorial :any;
  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id:any) {
    this.tutorialService.get(id)
      .subscribe(
        (        data: any) => {
          this.currentTutorial = data;
          console.log(data);
        },
        (        error: any) => {
          console.log(error);
        });
  }

  updatePublished(status: any) {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };

    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe(
        (        response: any) => {
          this.currentTutorial.published = status;
          console.log(response);
        },
        (        error: any) => {
          console.log(error);
        });
  }

  updateTutorial() {
    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe(
        (        response: any) => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        (        error: any) => {
          console.log(error);
        });
  }

  deleteTutorial() {
    this.tutorialService.delete(this.currentTutorial.id)
      .subscribe(
        (        response: any) => {
          console.log(response);
          this.router.navigate(['/tutorials']);
        },
        (        error: any) => {
          console.log(error);
        });
  }
}
