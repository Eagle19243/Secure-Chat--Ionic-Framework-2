import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TabFriendsPage } from '../tab-friends/tab-friends';
import { TabChatsPage } from '../tab-chats/tab-chats';
import { TabAddPage } from '../tab-add/tab-add';
import { TabSettingsPage } from '../tab-settings/tab-settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TabFriendsPage;
  tab2Root: any = TabChatsPage;
  tab3Root: any = TabAddPage;
  tab4Root: any = TabSettingsPage;

  constructor() {

  }
}
