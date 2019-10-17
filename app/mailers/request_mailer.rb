class RequestMailer < ApplicationMailer
  def notify_admin(request)
    @request = request

    mail to: "info@skazka-show.ru", subject: "Новая заявка на сайте skazka-show.ru"
  end
end
