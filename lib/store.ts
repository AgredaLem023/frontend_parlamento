/**
 * Copyright (c) 2025 Sergio Agreda
 * 
 * This code is proprietary and confidential.
 * All rights reserved.
 * 
 * Author: Sergio Agreda <sergioagreda21@outlook.com>
 * Created: May 2025
 */

import {create} from 'zustand'
import type { EventType } from './types'

interface EventState {
  selectedDate: Date | null
  selectedEvents: EventType[]
  setSelectedDate: (date: Date) => void
  setSelectedEvents: (events: EventType[]) => void
}

export const useEventStore = create<EventState>(set => ({
  selectedDate: null,
  selectedEvents: [],
  setSelectedDate: date => set({ selectedDate: date }),
  setSelectedEvents: events => set({ selectedEvents: events }),
}))
