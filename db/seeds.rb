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
client = Client.create!(id: 2, client_name: 'Juan', number: '201-884-4500', img_url:'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', email: 'juan@hello.com', appointment_id: 2)
client = Client.create!(id: 3, client_name: 'Camilo', number: '305-100-6000', img_url:'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', email: 'camilo@hello.com', appointment_id: 2)

appointment = Appointment.create!(id: 1, user_id: 1, style: "Portraits", time: '09:00am', date: '22-03-24', location: 'Miami, FL', img_url: 'https://images.pexels.com/photos/937453/pexels-photo-937453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', description: 'Casual photos at the street', client_id: 1)
appointment = Appointment.create!(id: 2, user_id: 1, style: "Fashion", time: '10:00am', date: '22-03-25', location: 'Homestead, FL', img_url: 'https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', description: 'Brand editorial photos', client_id: 2)
appointment = Appointment.create!(id: 3, user_id: 1, style: "Wedding", time: '11:00am', date: '22-03-26', location: 'Fort Laudardale, FL', img_url: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', description: 'Photo coverage at church', client_id: 3)


puts "seeding done ✅✅✅"
