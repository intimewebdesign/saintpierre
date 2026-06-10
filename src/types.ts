/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Dish {
  id: string;
  name: string;
  description: string;
  story: string;
  ingredients: string[];
  flavors?: string[];
  winePairing: string;
  pairingNotes: string;
  price: string;
  image: string;
  threeColor: string; // Color hint for 3D procedural rendering updates
  threeShape: 'spheres' | 'torus' | 'particles' | 'crystals';
}

export interface ExperienceScene {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface MenuItem {
  chapter: string;
  courseName: string;
  concept: string;
  ingredients: string[];
  pairing: string;
  priceEstimate?: string;
  chefInsight: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  specialRequests: string;
}
