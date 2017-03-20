import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TabFriendsPage } from '../pages/tab-friends/tab-friends';
import { TabChatsPage } from '../pages/tab-chats/tab-chats';
import { TabAddPage } from '../pages/tab-add/tab-add';
import { TabSettingsPage } from '../pages/tab-settings/tab-settings';
import { GroupPage } from '../pages/group/group';
import { ProfilePage } from '../pages/profile/profile';
import { ChatChannelPage } from '../pages/chat-channel/chat-channel';
import { ChatDetailPage } from '../pages/chat-detail/chat-detail';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

let appPages = [
  MyApp,
  AboutPage,
  ContactPage,
  HomePage,
  TabsPage,
  TabFriendsPage,
  TabChatsPage,
  TabAddPage,
  TabSettingsPage,
  GroupPage,
  ProfilePage,
  ChatChannelPage,
  ChatDetailPage,
  LoginPage,
  SignupPage,
];

@NgModule({
  declarations: appPages,
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: appPages,
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
