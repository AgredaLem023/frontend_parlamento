/**
 * Copyright (c) 2025 Sergio Agreda
 * 
 * This code is proprietary and confidential.
 * All rights reserved.
 * 
 * Author: Sergio Agreda <sergioagreda21@outlook.com>
 * Created: May 2025
 */

export type EventType = {
    id: string
    title: string
    date: string     // ISO or parseable by `new Date(...)`
    time: string
    location: string
    description: string
    image: string
    category: 'workshop' | 'performance' | 'meeting' | 'exhibition'
    capacity: number
  }
  