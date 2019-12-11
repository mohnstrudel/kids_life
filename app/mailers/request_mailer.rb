class RequestMailer < ApplicationMailer
  default from: 'info@skazka-show.ru'
  layout 'mailer'

  def notify_admin(request)
    @request = request

    mail to: "info@skazka-show.ru", subject: "Новая заявка на сайте skazka-show.ru"
  end
end
