// @ts-ignore
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// @ts-ignore
describe('AppComponent', () => {
  // @ts-ignore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  // @ts-ignore
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // @ts-ignore
    expect(app).toBeTruthy();
  });

  // @ts-ignore
  it(`should have the 'angular-test' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // @ts-ignore
    expect(app.title).toEqual('angular-test');
  });

  // @ts-ignore
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // @ts-ignore
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-test');
  });
});
