/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  SERVICES = 'services',
  MISSION = 'mission',
  CONTACT = 'contact',
}
