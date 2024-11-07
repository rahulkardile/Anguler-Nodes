import { Component } from '@angular/core';
import { TeamInfoComponent } from '../../../../shared/reusable/team-info/team-info.component';
import { IOurTeam } from '../../../../core/model/Interface/IOurTeam';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [TeamInfoComponent],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent {
  ourTeam : IOurTeam[] = [
    {
      name: "John Doe",
      description: "Lorem ipsum dolor illum ex nihil ullam fugiat vero ut officia ducimus voluptatibus aperiam ratione facere, error dolore quam eveniet?",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJr-fGkiy1DE5A0JNOkcmCNGcXuQXdzENZA&s",
      position: "Web Developer"
    },
    
    {
      name: "Rahul Sonawane",
      description: "Lorem ipsum dolor illum ex nihil ullam fugiat vero ut officia ducimus voluptatibus aperiam ratione facere, error dolore quam eveniet?",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJr-fGkiy1DE5A0JNOkcmCNGcXuQXdzENZA&s",
      position: "Digital Marketer"
    },
    {
      name: "BHatki Purnale",
      description: "Lorem ipsum dolor illum ex nihil ullam fugiat vero ut officia ducimus voluptatibus aperiam ratione facere, error dolore quam eveniet?",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJr-fGkiy1DE5A0JNOkcmCNGcXuQXdzENZA&s",
      position: "Designer"
    },
    {
      name: "Shantanu Nirphal",
      description: "Lorem ipsum dolor illum ex nihil ullam fugiat vero ut officia ducimus voluptatibus aperiam ratione facere, error dolore quam eveniet?",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJr-fGkiy1DE5A0JNOkcmCNGcXuQXdzENZA&s",
      position: "Frontend Dev"
    },

  ] 
}
