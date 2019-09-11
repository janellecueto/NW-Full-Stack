class Student:
    def __init__(self, first_name, last_name, middle_initial, address, email, phone_number):
        self.first_name = first_name
        self.last_name = last_name
        self.middle_initial = middle_initial
        self.address = address
        self.email = email
        self.phone_number = phone_number

    def report(self):
        print("Printing student info...")
        print(self.first_name, self.last_name, ",", self.middle_initial)
        print("Address:", self.address)
        print("Email:", self.email)
        print("Phone number:", self.phone_number)

    