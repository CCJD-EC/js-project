import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeRouteComponent} from './routes/home-route/home-route.component';
import {LoginRouteComponent} from './routes/login-route/login-route.component';
import {SignInRouteComponent} from './routes/sign-in-route/sign-in-route.component';
import {FooterComponent} from './components/footer/footer.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {SignInFormComponent} from './components/sign-in-form/sign-in-form.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {LoginFormComponent} from './components/login-form/login-form.component';
import {ToolbarMainComponent} from './components/toolbar-main/toolbar-main.component';
import {MainPageRouteComponent} from './routes/main-page-route/main-page-route.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelMenuModule} from "primeng/panelmenu";
import {AlbumPostComponent} from './components/album-post/album-post.component';
import {ConfirmationService, MessageService, SharedModule} from "primeng/api";
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {PhotoService} from "./services/http/photo.service";
import {GalleriaModule} from 'primeng/galleria';
import {UserService} from "./services/http/user.service";
import {AuthService} from "./services/auth/auth.service";
import {IsAdminGuard} from "./services/guards/is-admin.guard";
import {IsUserGuard} from "./services/guards/is-user.guard";
import {IsSuperGuard} from "./services/guards/is-super.guard";
import { CrudComponent } from './components/crud/crud.component';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {roleService} from "./services/http/role.service";
import {albumService} from "./services/http/album.service";
import {FieldsetModule} from 'primeng/fieldset';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { OpinionBoxComponent } from './components/opinion-box/opinion-box.component';
import {commentService} from "./services/http/comment.service";
import {postService} from "./services/http/post.service";
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactRouteComponent } from './routes/contact-route/contact-route.component';
import { CrudAlbumComponent } from './components/crud-album/crud-album.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeRouteComponent,
    LoginRouteComponent,
    SignInRouteComponent,
    FooterComponent,
    ToolbarComponent,
    SignInFormComponent,
    LoginFormComponent,
    ToolbarMainComponent,
    MainPageRouteComponent,
    AlbumPostComponent,
    CrudComponent,
    CommentBoxComponent,
    OpinionBoxComponent,
    CreatePostComponent,
    ContactFormComponent,
    ContactRouteComponent,
    CrudAlbumComponent
  ],
  imports: [
    BrowserModule,
    PanelMenuModule,
    ScrollPanelModule,
    BrowserAnimationsModule,
    GalleriaModule,
    PanelModule,
    CardModule,
    AppRoutingModule,
    HttpClientModule, //Importa el http client
    FormsModule,
    SharedModule,
    //TIpos de formulario
    FieldsetModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
  ],
  providers: [
    PhotoService,
    UserService,
    AuthService,
    IsAdminGuard,
    IsUserGuard,
    IsSuperGuard,
    MessageService,
    ConfirmationService,
    roleService,
    albumService,
    commentService,
    postService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
