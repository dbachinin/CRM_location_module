# frozen_string_literal: true
module SendNotifications
    def self.send_notification(message)
        ActionCable.server.broadcast('NotificationChannel', message)
    end
end
