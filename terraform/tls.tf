resource "tls_private_key" "booking_app_p_key" {
  algorithm = "RSA"
}

resource "aws_key_pair" "booking_app_p_key_pair" {
  key_name   = "booking-app-p-key-pair"
  public_key = tls_private_key.booking_app_p_key.public_key_openssh
}

resource "local_file" "private_key" {
  depends_on = [
    tls_private_key.booking_app_p_key,
  ]
  content  = tls_private_key.booking_app_p_key.private_key_pem
  filename = "BookingAppKeyPair.pem"
}