import { Component, OnInit } from '@angular/core';
import { EditorService } from './../editor.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  editorContent = '';

  constructor(private editorService: EditorService) {}

  ngOnInit(): void {
    this.getContent();
  }

  saveContent(content: string) {
    this.editorService.setContent(content);
  }

  private async getContent() {
    this.editorContent = await this.editorService.getContent();
  }
}
