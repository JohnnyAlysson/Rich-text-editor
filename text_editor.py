from tkinter import *           
import customtkinter
from functions import *

window = Tk()
window.geometry("600x600") 
window.title("Rich text Editor ")

title = Label(window,text="Let's start")
text = Label(window,text= "Here is an example")

#buttons
bold_image= PhotoImage(file = "./assets/bold.png")
bold=Button(window, text="B",image= bold_image, command= boldfunction(text["text"]) )

italic_image= PhotoImage(file = "./assets/italic.png")
italic=Button(window, text="B",image= italic_image, )

aling_left_image= PhotoImage(file = "./assets/aling_left.png")
aling_left=Button(window, text="B",image= aling_left_image )

aling_center_image= PhotoImage(file = "./assets/aling_center.png")
aling_center=Button(window, text="B",image= aling_center_image)

aling_right_image= PhotoImage(file = "./assets/aling_right.png")
aling_right=Button(window, text="B",image= aling_right_image)

# GRID positioning
title.grid(row=0,)
bold.grid(row=1,column=0)
italic.grid(row=1,column=1)
aling_left.grid(row=1,column=2)
aling_center.grid(row=1,column=3)
aling_right.grid(row=1,column=4)
text.grid(row=2,    )

 
# mainframe = ttk.Frame(window, padding="3 3 12 12")
# mainframe.grid(column=0, row=0, sticky=(N, W, E, S))
# window.columnconfigure(0, weight=1)
# window.rowconfigure(0, weight=1)


window.mainloop()