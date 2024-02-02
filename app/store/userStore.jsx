import React from 'react'
import { create } from 'zustand'

export const userStore = create((set) => ({
  menuVisible: false,
  updateMenuVisible: (menuVisible) => set(() => ({menuVisible })),
}))