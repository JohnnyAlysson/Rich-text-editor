from tkinter import *           
import customtkinter

window = Tk()
window.geometry("600x600") 
window.title("Rich text Editor ")


bold_image= PhotoImage(file = "./assets/bold.png")
bold=Button(window, text="B",image= bold_image )
bold.grid(row=0,column=0)

italic_image= PhotoImage(file = "./assets/italic.png")
italic=Button(window, text="B",image= italic_image )
italic.grid(row=0,column=1)

aling_left_image= PhotoImage(file = "./assets/aling_left.png")
aling_left=Button(window, text="B",image= aling_left_image )
aling_left.grid(row=0,column=2)

aling_center_image= PhotoImage(file = "./assets/aling_center.png")
aling_center=Button(window, text="B",image= aling_center_image)
aling_center.grid(row=0,column=3)

aling_right_image= PhotoImage(file = "./assets/aling_right.png")
aling_right=Button(window, text="B",image= aling_right_image)
aling_right.grid(row=0,column=4)


 
# mainframe = ttk.Frame(window, padding="3 3 12 12")
# mainframe.grid(column=0, row=0, sticky=(N, W, E, S))
# window.columnconfigure(0, weight=1)
# window.rowconfigure(0, weight=1)




window.mainloop()