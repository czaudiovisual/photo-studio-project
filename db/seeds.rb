# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "seeds deleted ❌❌❌"

User.destroy_all
Appointment.destroy_all
Client.destroy_all

user = User.create!(id: 1, name: 'Christian', photo_style: "Portraits", username: "christian@hello.com", password: "password")

client = Client.create!(id: 1, client_name: 'Maye', number: '305-262-8080', img_url:'https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', email: 'maye@hello.com', appointment_id: 1)

appointment = Appointment.create!(id: 1, user_id: 1, style: "Portraits", time: '09:00am', date: '22-03-24', location: 'Miami, FL', img_url: 'https://images.pexels.com/photos/937453/pexels-photo-937453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', description: 'Casual photos at the street', client_id: 1)


puts "seeding done ✅✅✅"
