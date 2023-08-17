resource "aws_instance" "booking_app_ec2" {
  ami                    = "ami-0f8e81a3da6e2510a"
  instance_type          = "t2.medium"
  subnet_id              = aws_subnet.booking_app_subnet.id
  vpc_security_group_ids = [aws_security_group.booking_app_sg.id]
  key_name               = "booking-app-p-key-pair"

  tags = {
    Name = "booking-app-ec2"
  }
}