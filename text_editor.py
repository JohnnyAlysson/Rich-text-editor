from tkinter import *           
# import customtkinter
from functions import *

window = Tk()
window.geometry("600x600") 
window.iconbitmap("assets\icone_texto.ico")
window.title("Rich text Editor ")

title = Label(window,text="Let's start")
text = Entry()

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
bold.grid(column=0)
italic.grid(column=0)
aling_left.grid(column=0)
aling_center.grid(column=0)
aling_right.grid(column=0)
text.grid(column=2    )

#USAR SPAM para mesclar


window.mainloop()